export const UserInfo = ({ user }) => (
  <a href={`mailto:${user.email}`}>{user.name}</a>
);
