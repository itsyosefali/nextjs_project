export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{
    next: {
      revalidate: 60, // Not a standard fetch option, make sure it's being used correctly
    },
  });

  if (!res.ok) return undefined

  return res.json()
}