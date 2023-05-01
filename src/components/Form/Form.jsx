import './Form.css'

export default function Form(props) {
    return (
        <form className='formulario' onSubmit={props.onSubmit}>
            <input type="text" placeholder='Digite uma cidade' onChange={props.onChange} />
            <button onClick={props.onClick}>
                buscar
            </button>
        </form>
    )
}