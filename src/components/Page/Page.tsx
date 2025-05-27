import { ReactNode } from "react";
import { isEmpty, isNotNil } from "ramda";

import { Breadcrumb } from "./Breadcrumb/Breadcrumb";
import { Container, ContainerVariant } from "../Container/Container";
import { PageHeader } from "./PageHeader/PageHeader";
import { Device, HasDevice } from "src/modules/common/device/Device";

export type DefaultSearchParams = unknown;

export interface CommonPageProps {
  searchParams?: DefaultSearchParams;
}

interface PageProps extends CommonPageProps, HasDevice {
  title?: string;
  header?: ReactNode;
  breadcrumbItems?: string[];
  containerVariant?: ContainerVariant;
  containerClassName?: string;
  children: ReactNode;
}

export const Page = ({
  device: rawDevice,
  title,
  header,
  breadcrumbItems,
  containerVariant = "wide",
  containerClassName,
  children,
}: PageProps) => {
  const device = Device.of(rawDevice);
  return (
    <>
      {breadcrumbItems && !isEmpty(breadcrumbItems) && (
        <Breadcrumb device={device.name} items={breadcrumbItems} />
      )}
      {title && !isEmpty(title) && (
        <Container
          device={device.name}
          className={["pb-[24px]", containerClassName]
            .filter(isNotNil)
            .join(" ")
            .trim()}
          variant={containerVariant}
        >
          <PageHeader device={device.name} title={title} />
        </Container>
      )}
      {header && (
        <div
          className={device.map({
            desktop: () => "pt-[64px]",
            mobile: () => "pt-[88px]",
          })}
        >
          {header}
        </div>
      )}
      <main
        className={[
          device.map({
            desktop: () => "",
            mobile: () =>
              (title && !isEmpty(title)) || isNotNil(header) ? "" : "pt-[64px]",
          }),
        ]
          .join(" ")
          .trim()}
      >
        {children}
      </main>
    </>
  );
};
