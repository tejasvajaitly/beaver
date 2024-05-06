import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image src={image.url} width={480} height={480} alt={image.name} />
    </div>
  );
}
