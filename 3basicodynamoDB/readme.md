# comandos de dynamoDB
### Descibir tabla
* `aws dynamodb describe-table --table-name tb_note`

### crear tabla
* `aws dynamodb create-table --table-name prueba_table --attribute-definitions AttributeName=user_id,AttributeType=S  AttributeName=time,AttributeType=N --key-schema AttributeName=user_id,KeyType=HASH  AttributeName=time,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1`

### borrar tabla
* `aws dynamodb delete-table --table-name prueba_table`

### agregar data
* `aws dynamodb put-item --table-name prueba_table --item file://item.json`

### Actualizar un solo dato crear los archivos json para mas facilidad
* `aws dynamodb update-item --table-name prueba_table --key file://key.json --update-expression "SET #t = :t" --expression-attribute-names file://attribute_names.json --expression-attribute-values file://attribute_values.json`

### Borrar un item
* `aws dynamodb delete-item --table-name prueba_table --key file://key.json`