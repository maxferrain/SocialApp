import classes from "./ProfileInfo.module.css";

const {descriptionBlock} = classes;

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    width='800px'
                    src='https://images.unsplash.com/photo-1623650915002-4a0819173cd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                />
            </div>
            <div className={descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;
