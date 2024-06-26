import { memo } from 'react';
import Slider from 'rc-slider';
import { formatNumberToCurrency } from '../libs/currency';
import { cn } from '../libs/common';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const variants = {
  term: 'term',
  amount: 'amount',
} as const;

interface Props {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (name: string, value: number) => void;
  variant: keyof typeof variants;
  title: string;
  error?: boolean;
  id: string;
}

const INPUT_BASE_CLASSNAME = "text-white bg-transparent font-bold text-2xl focus-visible:outline-none border border-white text-center w-[145px]";

export const RangeInput = memo((props: Props) => {
  const { max, min, step, value, onChange, title, variant, error, id } = props;
  const isAmountVariant = variant === variants.amount

  // Prevent values less than 1000
  if (isAmountVariant && min < 1000) {
    throw new Error('Minimum value must be at least 1000 for the amount variant.');
  }

  // This validation was created to prevent more than 6 characters,
  // in order to maintain UI and prevent excessively large numbers.
  // This means that we need to study how to change the UI if I want to add numbers more than 1 millions.
  if (isAmountVariant && max > 999_999) {
    throw new Error('Max value must be less than 1_000_000 for the amount variant.');
  }

  return (
    <div className="relative space-y-4">
      <div className="flex justify-between">
        <label htmlFor={id} className="uppercase text-lg font-light text-white">{title}</label>
        {isAmountVariant ? (
          <MaskedInput
            id={id}
            placeholder="$0.00"
            type="text"
            value={value}
            onChange={({ target: { value } }) => {
              const amount = value.split('$').pop().split('.').join('');
              const parsedVal = Number(amount);
              onChange(variants.amount, parsedVal);
            }}
            mask={
              createNumberMask({
                prefix: '$',
                suffix: '',
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: '.',
                allowDecimal: false,
                decimalSymbol: ',',
                integerLimit: String(max).length,
                allowNegative: false,
                allowLeadingZeroes: true,
              })
            }
            className={cn(INPUT_BASE_CLASSNAME, {
              'border-red-500': Boolean(error),
            })}
          />
        ) : (
          <input
            id={id}
            type="text"
            value={value}
            onChange={(event) => {
              const value = event.target.value;
              
              if (value.length > 2) {
                return;
              }

              onChange(variant, Number(value));
            }}
            className={cn(INPUT_BASE_CLASSNAME, {
              'border-red-500': Boolean(error),
            })}
          />
        )}
      </div>
      <div className="px-[35px] relative space-y-2">
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(value) => {
            if (typeof value === 'number') {
              onChange(variant, value)
            }
          }}
          aria-hidden="true"
        />
        <div className="flex justify-between text-white font-semibold">
          <p
            className={cn({
              '-translate-x-2/4': isAmountVariant,
              '-ml-[4px]': !isAmountVariant,
            })}
          >
            {isAmountVariant ? formatNumberToCurrency(min, false) : min }
          </p>
          <p
            className={cn({
              'translate-x-2/4': isAmountVariant,
              '-mr-[10px]': !isAmountVariant,
            })}
          >
            {isAmountVariant ? formatNumberToCurrency(max, false) : max }
          </p>
        </div>
      </div>
    </div>
  );
});
