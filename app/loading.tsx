import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Loading() {
  return (
    <MaxWidthWrapper>
      <div className="flex h-[75vh] w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    </MaxWidthWrapper>
  );
}
