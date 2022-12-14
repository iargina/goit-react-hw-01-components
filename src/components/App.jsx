import { User } from 'components/profile/Profile';
import user from 'data/user.json';
import { Statistics } from 'components/statistics/Statistics';
import stat from 'data/data.json';
import { FriendList } from 'components/friendList/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="" stats={stat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
