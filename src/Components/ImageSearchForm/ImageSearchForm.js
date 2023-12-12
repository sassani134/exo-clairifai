import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function ImageSearchForm( { onInputChange, onSubmit } ) {
    return (
        <div className="ma5 to">
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <InputGroup className="mb-3">
              <FormControl className="f4 pa2 w-70 center" id="basic-url" aria-describedby="basic-addon3" onChange={onInputChange}/>
            </InputGroup>
            <Button variant="secondary" onClick={onSubmit}>
              Detect
            </Button>
          </div>
        </div>
      </div>
    );
  }

  export default ImageSearchForm;
