import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
        >
          <Form.Control type="text" placeholder="Ingresa una tarea" />
          <Button variant="primary" type="submit">
            ➕
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">
          Error al cargar una tarea
        </Form.Text>
      </Form>
      <ListaTarea />
    </section>
  );
};

export default FormularioTarea;
