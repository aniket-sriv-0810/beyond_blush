import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInfoCard from './UserInfoCard';
import InfoGrid from './InfoGrid';
import ActionButtons from './ActionButtons';

const AdminUserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${userId}`);
        setUser(res.data.data.user);
      } catch (err) {
        setError('Failed to load user info.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  if (loading) return <p className="text-orange-600 text-sm animate-pulse">Loading user details...</p>;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;

  return (
    <div className="p-6 md:p-8 md:mt-20 bg-white shadow-xl rounded-3xl max-w-4xl mx-auto space-y-8 border border-orange-100">
      <UserInfoCard user={user} />
      <hr className="border-t border-orange-200" />
      <InfoGrid user={user} />
      <ActionButtons user={user} />
    </div>
  );
};

export default AdminUserDetails;
