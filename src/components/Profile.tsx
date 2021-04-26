import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://pbs.twimg.com/profile_images/1345163175981936640/3DRr4Xop_400x400.jpg" alt="Matheus Felipe"/>
            <div>
                <strong>Matheus Felipe</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}