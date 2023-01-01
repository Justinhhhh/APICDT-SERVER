import Form from '../components/form'

function Registration() {
    return (
        <Form information={['Name', 'Email Address', 'School', 'Country','Topic']} />
      );
}

export default Registration;