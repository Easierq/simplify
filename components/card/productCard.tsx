"use client";

// package
import React from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { VariantProps, cva } from "class-variance-authority";

// ui
import ButtonPrimitive, { ButtonProps } from "@/components/button";
import Text, { TextProps } from "@/components/ui/text";
import { WishlistIcon } from "@/components/ui/assets/svg";

// lib
import { cn } from "@/lib/utils";

// hooks
import {
  ProductCardProvider,
  useProductCardContext,
} from "@/hooks/productCardContext";
import { Course } from "@prisma/client";
import { formatPrice } from "@/lib/format";

export type ProductDataProps = {
  data: Course;
};

interface RootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ProductDataProps {}

const Root: React.FC<RootProps> = ({ data, className, children, ...props }) => {
  return (
    <ProductCardProvider data={data}>
      <div className={cn("grid grid-cols-1 gap-3", className)} {...props}>
        {children}
      </div>
    </ProductCardProvider>
  );
};

type ThumbnailProps = React.PropsWithChildren<{ className?: string }>;

const Thumbnail: React.FC<ThumbnailProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        // "group relative flex h-[200px] w-full flex-col justify-between overflow-hidden bg-[#F3F5F7] p-3.5",
        // "group relative flex aspect-video flex-col justify-between overflow-hidden bg-[#F3F5F7] p-3.5",
        "group relative aspect-video overflow-hidden bg-[#F3F5F7]",
        className
      )}
    >
      {children}
    </div>
  );
};

const ThumbnailBadge: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className=" absolute top-2 left-2 z-10 flex items-start justify-between">
      {children}
    </div>
  );
};

type BadgeVariants = VariantProps<typeof badgeVariants>;

const badgeVariants = cva(
  "w-fit rounded px-3.5 py-1 font-inter text-xs font-bold uppercase",
  {
    variants: {
      intent: {
        default: "bg-[#ffd700] text-black",
        discount: "bg-[#38CB89] text-[#FEFEFE]",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface BadgeProps
  extends BadgeVariants,
    React.HTMLAttributes<HTMLDivElement> {}

const Badge: React.FC<BadgeProps> = ({
  intent,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(badgeVariants({ intent, className }))} {...props}>
      {children}
    </div>
  );
};

type WishlistButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const WishlistButton: React.FC<WishlistButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "shadow-[rgba(15, 15, 15, 0.12)] flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-opacity duration-100 ease-out group-hover:opacity-100",
        className
      )}
      {...props}
    >
      <WishlistIcon className="h-5 w-5" />
    </button>
  );
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonPrimitive {...props}>{children}</ButtonPrimitive>;
};

type ImageProps = Omit<NextImageProps, "src" | "alt">;

const Image: React.FC<ImageProps> = ({
  width = 231,
  height = 500,
  className,
  ...props
}) => {
  const { imageUrl } = useProductCardContext();

  return (
    <NextImage
      src={imageUrl as string}
      width={width}
      height={height}
      alt="course-pic"
      className={cn(
        "absolute left-0 top-0 z-0 h-full w-full object-fill",
        className
      )}
      {...props}
    />
  );
};

const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
};

// type RatingsProps = {
//   className?: string;
// };

// const Ratings: React.FC<RatingsProps> = ({ className }) => {
//   const {  } = useProductCardContext();

//   return (
//     <div className="flex gap-0.5">
//       {formatRating(rating).map((rating) => (
//         <StarIcon key={rating} className={cn("h-4 w-4", className)} />
//       ))}
//     </div>
//   );
// };

type NameProps = Omit<TextProps, "children">;

const Name: React.FC<NameProps> = ({ className, ...props }) => {
  const { title } = useProductCardContext();

  return (
    <Text
      weight={600}
      color="black/800"
      className={cn("line-clamp-1", className)}
      {...props}
    >
      {title}
    </Text>
  );
};

type PriceProps = Omit<TextProps, "children">;

const Price: React.FC<PriceProps> = ({ className, ...props }) => {
  const { price } = useProductCardContext();

  return (
    <Text
      size="sm"
      weight={700}
      color="black/800"
      className={cn("line-clamp-1", className)}
      {...props}
    >
      ₦{formatPrice(price as number)}
    </Text>
  );
};

type DescriptionProps = Omit<TextProps, "children">;

const Description: React.FC<DescriptionProps> = ({ className, ...props }) => {
  const { description } = useProductCardContext();

  return (
    <Text
      size="xs"
      weight={400}
      color="gray"
      className={cn(className)}
      {...props}
    >
      {description}
    </Text>
  );
};

export {
  Root,
  Thumbnail,
  ThumbnailBadge,
  Badge,
  WishlistButton,
  Image,
  Button,
  Content,
  // Ratings,
  Name,
  Price,
  Description,
};
