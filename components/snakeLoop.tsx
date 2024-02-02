const SnakeLoop = () => {
    return (
        <div style={{position: 'relative', width: '100%', maxWidth: '100vw', overflow: 'hidden',}}>
            <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                <source src="/snake-loop.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}/>
        </div>
    );
};
 
export default SnakeLoop;