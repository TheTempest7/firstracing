import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Scorelist.scss'


function Scorelist() {
    const [list, setList] = useState([]);
    const datagetter = () => {
        let sessionStore = JSON.parse(localStorage.getItem('score'));
        if (sessionStore) {
            let z = sessionStore;
            z.sort((a, b) => {
                if (a.score > b.score) {
                    return -1
                }
                else if (a.score < b.score) {
                    return 1
                }
                return z;
            });
            setList(sessionStore);
        }
    }

    const eluminator = () => {
        let isBoss = window.confirm('Are you really wanna eluminate all scores?');
        if (isBoss) {
            localStorage.removeItem('score');
            setList([]);
        }
    }

    useEffect(() => {
        datagetter();
    }, []);
    if (list.length !== 0) {
        return (
            <div className='mother'>
                <h1 className='mother__caption'>Scores Table </h1>
                <table className='mother__table'>
                    <tbody>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                        {list.map(function (i, index) {
                            return (
                                <tr key={i.key}>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.score}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='mother__back'>
                    <Link to='/'>back</Link>
                </div>
                <div onClick={eluminator} className='mother__reload'>
                    <p>Nullify scores</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='mother'>
                <h1 className='mother__caption' >Dude, have a try in game</h1>
                <h2 className='mother__caption'> and all your scores will apear here!)</h2>
                <div className='mother__back'>
                    <Link to='/'>back</Link>
                </div>
            </div>)
    }
}

export default Scorelist;