import React from "react";
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
import { rolNameUser } from "../../../../helpers";

const fields = ["Nombre", "Email", "Telefono", "Rol", "Estatus", "", ""];

const UserTable = ({ users }) => {
  return (
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
                  <ProfileImg src={user.image} alt={`UserPicture${user.id}`} />
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
              <TableCell align="center">{user.isActive}</TableCell>
              <TableCell align="center">
                <BtnFunction color="#000a12">
                  <Icon src={IcoEdit} alt="details" />
                  Editar
                </BtnFunction>
              </TableCell>
              <TableCell align="center">
                <BtnFunction color="#c0392b">
                  <Icon src={IcoDeleted} alt="details" />
                  Eliminar
                </BtnFunction>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Tablestyle>
    </TableContainer>
  );
};

export default UserTable;
