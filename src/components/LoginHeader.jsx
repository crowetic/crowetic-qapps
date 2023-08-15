
import React, { useEffect, useState } from 'react';
import './LoginHeader.css';

const LoginHeader = () => {
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const account = await qortalRequest({
          action: 'GET_USER_ACCOUNT',
        });

        const accountData = await qortalRequest({
          action: 'GET_ACCOUNT_DATA',
          address: account?.address,
        });

        setAccountInfo(accountData);
      } catch (error) {
        console.error('Error fetching account information:', error);
      }
    };

    fetchAccountInfo();
  }, []);

  console.log(accountInfo)
  return (
    <div className="login-header">
      {accountInfo && (
        <div className="account-info">
          <span style={{ color: 'white' }}>
            Address: {accountInfo?.address}
          </span>
          <span style={{ color: 'white' }}>
            Name: {accountInfo?.name}
          </span>
          <span style={{ color: 'white' }}>
            Level: {accountInfo?.level}
          </span>
        </div>
      )}
    </div>
  );
};


export default LoginHeader;
