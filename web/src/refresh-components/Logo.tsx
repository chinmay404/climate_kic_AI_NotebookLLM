import { useMemo } from "react";
import { OnyxIcon, OnyxLogoTypeIcon } from "@/components/icons/icons";
import { useSettingsContext } from "@/components/settings/SettingsProvider";
import { NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Text from "@/refresh-components/texts/Text";

export const FOLDED_SIZE = 24;
const UNFOLDED_SIZE = 88;

export interface LogoProps {
  folded?: boolean;
  className?: string;
}

export default function Logo({ folded, className }: LogoProps) {
  const settings = useSettingsContext();

  const logo = useMemo(
    () =>
      settings.enterpriseSettings?.use_custom_logo ? (
        <img
          src="/api/enterprise-settings/logo"
          alt="Logo"
          style={{
            objectFit: "contain",
            height: FOLDED_SIZE,
            width: FOLDED_SIZE,
          }}
          className={cn("flex-shrink-0", className)}
        />
      ) : (
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            objectFit: "contain",
            height: FOLDED_SIZE,
            width: FOLDED_SIZE,
          }}
          className={cn("flex-shrink-0", className)}
        />
      ),
    [className, settings.enterpriseSettings?.use_custom_logo]
  );

  return settings.enterpriseSettings?.application_name ? (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        {logo}
        <Text
          headingH3
          className={cn("line-clamp-1 truncate", folded && "invisible")}
          nowrap
        >
          {settings.enterpriseSettings?.application_name}
        </Text>
      </div>
      {!NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED && (
        <Text
          secondaryBody
          text03
          className={cn(
            "ml-[33px] line-clamp-1 truncate",
            folded && "invisible"
          )}
          nowrap
        >
          Powered by Onyx
        </Text>
      )}
    </div>
  ) : folded ? (
    <img
      src="/logo.png"
      alt="Logo"
      style={{
        objectFit: "contain",
        height: FOLDED_SIZE,
        width: FOLDED_SIZE,
      }}
      className={cn("flex-shrink-0", className)}
    />
  ) : (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          objectFit: "contain",
          height: 32,
          width: 32,
        }}
        className={cn("flex-shrink-0", className)}
      />
      <h1 className="text-xl font-bold text-text-900 dark:text-text-100">
        Climate KIC AI
      </h1>
    </div>
  );
}
