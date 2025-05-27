export const allTypographyVariants = [
  "headline1",
  "headline2",
  "headline3",
  "subtitle1",
  "subtitle2",
  "subtitle3",
  "subtitle4",
  "subtitle5",
  "body1",
  "body2",
  "caption1",
  "caption2",
  "caption3",
  "caption4",
] as const;
type TypographyVariantTuple = typeof allTypographyVariants;
export type TypographyVariant = TypographyVariantTuple[number];
export type TypographyMap = {
  [key in TypographyVariant]: [
    string,
    {
      lineHeight: string;
      fontWeight: string;
    }
  ];
};
