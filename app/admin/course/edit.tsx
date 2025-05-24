import { SimpleForm, Edit, TextInput, NumberInput, required } from "react-admin";

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]} label="Id" />
                <TextInput source="title" validate={[required()]} label="Title" />
                <TextInput source="imageSrc" validate={[required()]} label="Image" />
            </SimpleForm>
        </Edit>
    );
};