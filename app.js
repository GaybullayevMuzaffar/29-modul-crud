const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// ROUTES \\
const countryRoutes = require("./routes/country.routes");
app.use("/countries", countryRoutes);

const regionRoutes = require("./routes/region.routes");
app.use("/regions", regionRoutes);

const districtRoutes = require("./routes/district.routes");
app.use("/districts", districtRoutes);

const adminRoutes = require("./routes/admin.routes");
app.use("/admins", adminRoutes);

const customerRoutes = require("./routes/customer.routes");
app.use("/customers", customerRoutes);

const eventRoutes = require("./routes/event.routes");
app.use("/events", eventRoutes);

const eventTypeRoutes = require("./routes/event_type.routes");
app.use("/event-types", eventTypeRoutes);

const humanCategoryRoutes = require("./routes/human_category.routes");
app.use("/human-categories", humanCategoryRoutes);

const genderRoutes = require("./routes/gender.routes");
app.use("/genders", genderRoutes);

const langRoutes = require("./routes/lang.routes");
app.use("/langs", langRoutes);

const venueRoutes = require("./routes/venue.routes");
app.use("/venues", venueRoutes);

const venuePhotoRoutes = require("./routes/venue_photo.routes");
app.use("/venue-photos", venuePhotoRoutes);

const venueTypesRoutes = require("./routes/venue_types.routes");
app.use("/venue-types", venueTypesRoutes);

const typesRoutes = require("./routes/types.routes");
app.use("/types", typesRoutes);

const sectorRoutes = require("./routes/sector.routes");
app.use("/sectors", sectorRoutes);

const seatTypeRoutes = require("./routes/seat_type.routes");
app.use("/seat-types", seatTypeRoutes);

const seatRoutes = require("./routes/seat.routes");
app.use("/seats", seatRoutes);

const ticketRoutes = require("./routes/ticket.routes");
app.use("/tickets", ticketRoutes);

const ticketStatusRoutes = require("./routes/ticket_status.routes");
app.use("/ticket-statuses", ticketStatusRoutes);

const ticketTypeRoutes = require("./routes/ticket_type.routes");
app.use("/ticket-types", ticketTypeRoutes);

const bookingRoutes = require("./routes/booking.routes");
app.use("/bookings", bookingRoutes);

const paymentMethodRoutes = require("./routes/payment_method.routes");
app.use("/payment-methods", paymentMethodRoutes);

const deliveryMethodRoutes = require("./routes/delivery_method.routes");
app.use("/delivery-methods", deliveryMethodRoutes);

const discountRoutes = require("./routes/discount.routes");
app.use("/discounts", discountRoutes);

const cartRoutes = require("./routes/cart.routes");
app.use("/carts", cartRoutes);

const cartItemRoutes = require("./routes/cart_item.routes");
app.use("/cart-items", cartItemRoutes);

const customerCardRoutes = require("./routes/customer_card.routes");
app.use("/customer-cards", customerCardRoutes);

const customerAddressRoutes = require("./routes/customer_address.routes");
app.use("/customer-addresses", customerAddressRoutes);

const flatRoutes = require("./routes/flat.routes");
app.use("/flats", flatRoutes);


// SWAGGER \\
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// PORT \\
const PORT = process.env.PORT || 3333;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });