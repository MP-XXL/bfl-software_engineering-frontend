import { useState } from 'react';

function ProfileEditor() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  return (
    <div className="flex gap-4">
      <p>{firstName} {lastName}</p>
      <label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border"
        />
        First name
      </label>
      <label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border"
        />
        Last name
      </label>
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe
      </label>
    </div>
  );
}

export default ProfileEditor