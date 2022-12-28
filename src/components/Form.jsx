import './Form.css'

export default function Form(props) {
    return (
        <div role='form' className='formulario' >
            <input type="text" placeholder='Digite uma cidade' onChange={props.onChange} />
            <button onClick={props.onClick}>
                buscar
            </button>
        </div>
    )
}