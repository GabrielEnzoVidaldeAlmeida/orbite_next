import Link from "next/link";
import { SVGProps } from "react";

type SvgFooterProps = {
  linkProps: React.ComponentProps<typeof Link>;
  svg: React.FC<SVGProps<SVGSVGElement>>;
};

export default function SvgFooter({ linkProps, svg: Svg }: SvgFooterProps) {
  return (
    <Link {...linkProps} className="w-9 h-9 lg:w-12 lg:h-12">
      <Svg />
    </Link>
  );
}
