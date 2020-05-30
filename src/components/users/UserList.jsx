import React from "react"
import User from "./User"
import EmptyItem from "../resultcard/emptyitem/EmptyItem"

const UserList = ({users, query}) => {
    let user = users.map(user => {
        return <User name={user.name}
                     address={user.address}
                     id={user.id}
                     key={Math.random()}
        />
    })

    return (<div>
            {query.length ?
                <div>
                    {user.length ? <div className="card-body">{user}</div>
                        :
                        <div><EmptyItem/></div>
                    }
                </div>
                :
                ""
            }
        </div>
    )
}

export default UserList