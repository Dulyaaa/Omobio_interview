import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    GetUser = (id, username, password) => {
        Axios.post('http://localhost/php-react/user.php',
            {
                id: id,
                username: username,
                password: password
            })
            .then(({ data }) => {
                if (data.success === 1) {
                    let users = this.state.users.map(user => {
                        if (user.id === id) {
                            user.username = username;
                            user.password = password;
                            user.isEditing = false;
                            return user;
                        }
                        return user;
                    });
                    this.setState({
                        users
                    });
                }
                else {
                    alert(data.msg);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    // FETCH USERS FROM DATABASE
    fetchUsers = () => {
        Axios.get('http://localhost/php-react/allUsers.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:data.users.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // INSERT USER
    insertUser = (event,username, name, email, password) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/addUser.php',{
            user_name:user_name,
            user_email:user_email
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    users:[
                        {"id":data.id,"username":username,"email":email, "password":password},
                        ...this.state.users
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;