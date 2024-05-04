import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/403691a6-afd5-4bb1-a09c-81e6bfd12fcf-485ft9.jpg",
  "https://utfs.io/f/88092a5d-e86c-48e1-af4b-44472c11c8e6-1vhs6q.jpg",
  "https://utfs.io/f/ea6bccc9-39bb-4a2d-977d-fad6c50127c6-z6ekeo.jpg",
  "https://utfs.io/f/0cd8056c-41ca-4557-b79f-86d9e63ee881-3pj1o7.MP.jpg",
];

const mockImages = mockUrls.map((url, index) => {
  return {
    url,
    id: index + 1,
  };
});

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => {
          return (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
