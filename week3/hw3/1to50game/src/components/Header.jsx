import React from "react";

function Header({ selected, onChange }) {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>1 to 50</h1>
            <div style={styles.menu}>
                <button 
                    style={selected === '게임' ? styles.activeButton : styles.button}
                    onClick={() => onChange('게임')}>
                    게임
                </button>
                <button
                    style={selected === '랭킹' ? styles.activeButton : styles.button}
                    onClick={() => onChange('랭킹')}>
                    랭킹
                </button>
            </div>
        </header>
    )
}


const styles = {
    header: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px 10px 50px',
        backgroundColor: '#f5f5f5',
        gap: '20px'
    },
    title: {
        fontSize: '1.1rem',
        margin: 0
    },
    menu: {
        display: 'flex',
        gap: '5px'
    },
    button: {
        padding: '5px 13px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5',
        fontSize: '0.7rem'
        // display: 'flex',
        // justifyContent: 'flex-start'
    },
    activeButton: {
        padding: '5px 13px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#448d5a',  // 색 var?로 지정하던 거 써보기
        color: 'white',
        fontSize: '0.7rem'
    }
}

export default Header