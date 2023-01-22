import '../../style/composants/Vagues.scss';

export default function Vagues(props)
{
    return (
        <div className='Vagues' style={props.rotationFond}>
            <div className='Vague' style={props.imageFond}></div>
            <div className='Vague' style={props.imageFond}></div>
            <div className='Vague' style={props.imageFond}></div>
            <div className='Vague' style={props.imageFond}></div>
        </div>
    )
}