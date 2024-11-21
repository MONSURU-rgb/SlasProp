import { useGetRoles } from "@/api/use-role";
import Footer from "@/components/Footer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import AddNewRoleDrawer from "./AddNewRoleDrawer";

const UserRoles = () => {
  const { data } = useGetRoles();
  console.log(data?.data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box
        sx={{
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
          px: 4,
          display: "flex",
          ml: "25%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          User Roles
        </Typography>

        <AddNewRoleDrawer />
      </Box>
      <div style={{ flex: 1 }}>
        <div style={{ padding: 16, marginLeft: "25%" }}>
          {data?.data?.map((role) => (
            <Box
              key={role?.id}
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
                width: "fit-content",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                {role?.name}
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>
          ))}
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                End Users
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                GIS Officer
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Registration Officer
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Sensitization Officer
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              mt: 2,
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Recording Officer
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Field Assistant
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                SLTR Officer & Deputy SLTR Officer
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Lands Records Bureau
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: 2,
              mb: 14,
              gap: 2,
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Surveyor General
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Cheif Registrar & Assistant Registrar of Deeds
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Governors
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>

            <Box
              sx={{
                border: "1px solid lightgrey",
                p: 3,
                display: "flex",
                marginRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Contents & Attributes
              </Typography>

              <MoreVertIcon sx={{ color: "orange" }} />
            </Box>
          </Box> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserRoles;
