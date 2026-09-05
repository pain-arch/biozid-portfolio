import React from "react";
import * as LucideIcons from "lucide-react";
import { ServiceItem } from "@/types/portfolio";

interface ServiceCardProps {
  item: ServiceItem;
}

export function ServiceCard({ item }: ServiceCardProps) {
  // Dynamically resolve the icon from lucide-react based on the iconName string
  const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.CheckCircle;

  return (
    <div className="bg-[#080E38] rounded-2xl p-8 sm:p-10 flex flex-col items-start text-left h-full transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      {/* Icon (Replaces the numbering) */}
      <div className="mb-8">
        <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-[#FDF48F]" strokeWidth={2} />
      </div>

      {/* Card Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
        {item.title}
      </h3>

      {/* Card Description */}
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

