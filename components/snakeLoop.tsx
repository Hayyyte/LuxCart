const SnakeLoop = () => {
    return (
        <div style={{position: 'relative', width: '100%', maxWidth: '100vw', overflow: 'hidden',}}>
            <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                <source src="/snake-loop.mp4" type="video/mp4" />
            </video>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white z-10">Lux Cart</h1>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}/>
        </div>
    );
};
 
export default SnakeLoop;