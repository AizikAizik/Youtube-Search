import React from "react"
import User from "./User"
import EmptyItem from "../resultcard/emptyitem/EmptyItem"

const UserList = ({users, query, cursor}) => {
    let user = users.map((user, i) => {
        return <User name={user.name}
                     address={user.address}
                     id={user.id}
                     query={query}
                     key={i}
                     index={i}
                     cursor = { cursor }
        />
    })

    return (
        <div>
            {query.length ?
                <div>
                    {user.length ? <div className="card-body">{user}</div>
                        :
                        <div><EmptyItem/></div>
                    }
                </div>
                :
                null
            }
        </div>
    )
}

export default UserList