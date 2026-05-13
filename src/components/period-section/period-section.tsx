import type { ReactNode } from 'react';
import { Cloudy, Moon, Sun } from 'lucide-react';

type PeriodType = 'morning' | 'afternoon' | 'evening';

type Period = {
  type: PeriodType;
  title: string;
};

type PeriodSectionProps = {
  period: Period;
};

const periodIcons: Record<PeriodType, ReactNode> = {
  morning: <Sun className="text-accent-blue" />,
  afternoon: <Cloudy className="text-accent-orange" />,
  evening: <Moon className="text-accent-yellow" />,
};

export const PeriodSection = ({ period }: PeriodSectionProps) => {
  return (
    <section className="mb-8 bg-background-tertiary rounded-xl">
      <div className="flex items-center px-5 py-3 justify-between border-b border-border-primary">
        <div>
          {periodIcons[period.type]}

          <h2 className="text-label-large text-content-primary">
            {period.title}
          </h2>
        </div>
      </div>
    </section>
  );
};
