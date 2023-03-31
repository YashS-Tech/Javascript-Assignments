import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostWithUserInfo extends Post {
  name: string;
  username: string;
  email: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  company: string;
}

async function getPosts(): Promise<PostWithUserInfo[]> {
  try {
    const { data: users } = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    const { data: posts } = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const postsWithUserInfo = posts.map<PostWithUserInfo>((post) => {
      const user = users.find((user) => user.id === post.userId);

      return {
        ...post,
        name: user?.name ?? '',
        username: user?.username ?? '',
        email: user?.email ?? '',
        city: user?.address.city ?? '',
        zipcode: user?.address.zipcode ?? '',
        phone: user?.phone ?? '',
        website: user?.website ?? '',
        company: user?.company.name ?? '',
      };
    });

    return postsWithUserInfo;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function main() {
  const posts = await getPosts();
  console.log(posts);
}

main();
