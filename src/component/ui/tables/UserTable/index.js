import React, { Fragment, useState } from "react";
import {
  Tablestyle,
  Icon,
  BtnFunction,
  UserDataWrapper,
  ProfileImg,
  Chip,
} from "./styled";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IcoEdit from "../../../../assets/img/edit.svg";
import IcoDeleted from "../../../../assets/img/delete.svg";
import AlertModal from "../../modals/AlertModal";
import { rolNameUser } from "../../../../helpers";

const fields = ["Nombre", "Email", "Telefono", "Rol", "Estatus", "", ""];

const UserTable = ({
  users,
  showModalEditUser,
  prepareRemoveUser,
  removeUser,
}) => {
  const [showModalAlert, setShowModalAlert] = useState(false);

  const showAlert = (user) => {
    prepareRemoveUser(user);
    setShowModalAlert(!showModalAlert);
  };
  const closeAlert = () => {
    setShowModalAlert(!showModalAlert);
  };

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Tablestyle aria-label="simple table">
          <TableHead>
            <TableRow>
              {fields.map((field) => (
                <TableCell
                  align="center"
                  key={field}
                  style={{ fontWeight: "bold", color: "#000a12" }}
                >
                  {field}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, idx) => (
              <TableRow key={idx}>
                <TableCell align="center">
                  <UserDataWrapper>
                    <ProfileImg
                      src={user.image}
                      alt={`UserPicture${user.id}`}
                    />
                    {`${user.firstName} ${user.lastName}`}
                  </UserDataWrapper>
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">
                  <Chip
                    background={rolNameUser(user.roleId).background}
                    txtColor={rolNameUser(user.roleId).color}
                  >
                    {rolNameUser(user.roleId).value}
                  </Chip>
                </TableCell>
                <TableCell align="center">
                  {user.isActive ? (
                    <Chip background="#33691e" txtColor="#FFFFFF">
                      Activo
                    </Chip>
                  ) : (
                    <Chip background="#b0bec5" txtColor="#000000">
                      Deshabilitado
                    </Chip>
                  )}
                </TableCell>
                <TableCell align="center">
                  <BtnFunction
                    onClick={() => showModalEditUser(user)}
                    color="#000a12"
                  >
                    <Icon src={IcoEdit} alt="Editar_usuario" />
                    Editar
                  </BtnFunction>
                </TableCell>
                <TableCell align="center">
                  <BtnFunction onClick={() => showAlert(user)} color="#c0392b">
                    <Icon src={IcoDeleted} alt="Eliminar_usuario" />
                    Eliminar
                  </BtnFunction>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tablestyle>
      </TableContainer>
      <AlertModal
        title="¿Estas seguro?"
        message="Estas seguro de eliminar al usuario"
        open={showModalAlert}
        handleClose={closeAlert}
        callback={removeUser}
      />
    </Fragment>
  );
};

export default UserTable;
