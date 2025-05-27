import { HTMLAttributes } from "react";
import { Divider } from "src/components/Divider/Divider";
import { Device, HasDevice } from "src/modules/common/device/Device";

interface PageHeaderProps extends HasDevice, HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const PageHeader = ({ title, device, ...props }: PageHeaderProps) => (
  <div
    {...props}
    className={[
      Device.of(device).map({
        desktop: () => "pt-[64px]",
        mobile: () => "pt-[88px]",
      }),
      props.className ?? "",
    ]
      .join(" ")
      .trim()}
  >
    <text>{title}</text>
    <Divider color="primary" className="w-full mt-[8px]" />
  </div>
);
