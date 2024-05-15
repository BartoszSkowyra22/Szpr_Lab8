const AccountDetails = (props) => {
    const user = props.user;
    return (
        <div>
            <h2>{user.firstName} {user.lastName} </h2>
            <p>id: {user._id}</p>
            <p>email: {user.email}</p>
        </div>); }

export default AccountDetails