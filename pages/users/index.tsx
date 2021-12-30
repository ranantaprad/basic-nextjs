import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UserProps {
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  console.log(dataUsers);

  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className={styles.card}
        >
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
