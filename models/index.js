const Country = require("./country.model");
const Region = require("./region.model");
const District = require("./district.model");
const Admin = require("./admin.model");
const Customer = require("./customer.model");
const Event = require("./event.model");const Event_Type = require("./event_type.model");
const Human_Category = require("./human_category.model");
const Gender = require("./gender.model");
const Lang = require("./lang.model");
const Venue = require("./venue.model");
const Venue_Photo = require("./venue_photo.model");
const Venue_Types = require("./venue_types.model");
const Types = require("./types.model");
const Sector = require("./sector.model");
const Seat_Type = require("./seat_type.model");
const Seat = require("./seat.model");
const Ticket = require("./ticket.model");
const Ticket_Status = require("./ticket_status.model");
const Ticket_Type = require("./ticket_type.model");
const Booking = require("./booking.model");
const Payment_Method = require("./payment_method.model");
const Delivery_Method = require("./delivery_method.model");
const Discount = require("./discount.model");
const Cart = require("./cart.model");
const Cart_Item = require("./cart_item.model");
const Customer_Card = require("./customer_card.model");
const Customer_Address = require("./customer_address.model");
const Flat = require("./flat.model");


Customer.hasMany(Cart, { foreignKey: 'customer_id' });
Cart.belongsTo(Customer, { foreignKey: 'customer_id' });

Customer.hasMany(Customer_Card, { foreignKey: 'customer_id' });
Customer_Card.belongsTo(Customer, { foreignKey: 'customer_id' });

Customer.hasMany(Customer_Address, { foreignKey: 'customer_id' });
Customer_Address.belongsTo(Customer, { foreignKey: 'customer_id' });

Gender.hasMany(Customer, { foreignKey: 'gender_id' });
Customer.belongsTo(Gender, { foreignKey: 'gender_id' });

Lang.hasMany(Customer, { foreignKey: 'lang_id' });
Customer.belongsTo(Lang, { foreignKey: 'lang_id' });

Region.hasMany(Customer_Address, { foreignKey: 'region_id' });
Customer_Address.belongsTo(Region, { foreignKey: 'region_id' });

District.hasMany(Customer_Address, { foreignKey: 'district_id' });
Customer_Address.belongsTo(District, { foreignKey: 'district_id' });

Flat.hasMany(Customer_Address, { foreignKey: 'flat_id' });
Customer_Address.belongsTo(Flat, { foreignKey: 'flat_id' });

Cart.hasMany(Cart_Item, { foreignKey: 'cart_id' });
Cart_Item.belongsTo(Cart, { foreignKey: 'cart_id' });

Ticket.hasMany(Cart_Item, { foreignKey: 'ticket_id' });
Cart_Item.belongsTo(Ticket, { foreignKey: 'ticket_id' });

Cart.hasMany(Booking, { foreignKey: 'cart_id' });
Booking.belongsTo(Cart, { foreignKey: 'cart_id' });

Payment_Method.hasMany(Booking, { foreignKey: 'payment_method_id' });
Booking.belongsTo(Payment_Method, { foreignKey: 'payment_method_id' });

Delivery_Method.hasMany(Booking, { foreignKey: 'delivery_method_id' });
Booking.belongsTo(Delivery_Method, { foreignKey: 'delivery_method_id' });

Discount.hasMany(Booking, { foreignKey: 'discount_id' });
Booking.belongsTo(Discount, { foreignKey: 'discount_id' });

Ticket_Status.hasMany(Cart, { foreignKey: 'status_id' });
Cart.belongsTo(Ticket_Status, { foreignKey: 'status_id' });

Ticket_Status.hasMany(Booking, { foreignKey: 'status_id' });
Booking.belongsTo(Ticket_Status, { foreignKey: 'status_id' });

Event.hasMany(Ticket, { foreignKey: 'event_id' });
Ticket.belongsTo(Event, { foreignKey: 'event_id' });

Seat.hasMany(Ticket, { foreignKey: 'seat_id' });
Ticket.belongsTo(Seat, { foreignKey: 'seat_id' });

Ticket_Status.hasMany(Ticket, { foreignKey: 'status_id' });
Ticket.belongsTo(Ticket_Status, { foreignKey: 'status_id' });

Ticket_Type.hasMany(Ticket, { foreignKey: 'ticket_type_id' });
Ticket.belongsTo(Ticket_Type, { foreignKey: 'ticket_type_id' });

Event_Type.hasMany(Event, { foreignKey: 'event_type_id' });
Event.belongsTo(Event_Type, { foreignKey: 'event_type_id' });

Human_Category.hasMany(Event, { foreignKey: 'human_category_id' });
Event.belongsTo(Human_Category, { foreignKey: 'human_category_id' });

Venue.hasMany(Event, { foreignKey: 'venue_id' });
Event.belongsTo(Venue, { foreignKey: 'venue_id' });

Lang.hasMany(Event, { foreignKey: 'lang_id' });
Event.belongsTo(Lang, { foreignKey: 'lang_id' });

Event_Type.hasMany(Event_Type, { foreignKey: 'parent_event_type_id' });
Event_Type.belongsTo(Event_Type, { foreignKey: 'parent_event_type_id' });

Gender.hasMany(Human_Category, { foreignKey: 'gender_id' });
Human_Category.belongsTo(Gender, { foreignKey: 'gender_id' });

Venue.hasMany(Venue_Photo, { foreignKey: 'venueId' });
Venue_Photo.belongsTo(Venue, { foreignKey: 'venueId' });

Venue.hasMany(Venue_Types, { foreignKey: 'venueId' });
Venue_Types.belongsTo(Venue, { foreignKey: 'venueId' });

Types.hasMany(Venue_Types, { foreignKey: 'typeId' });
Venue_Types.belongsTo(Types, { foreignKey: 'typeId' });

Region.hasMany(Venue, { foreignKey: 'region_id' });
Venue.belongsTo(Region, { foreignKey: 'region_id' });

District.hasMany(Venue, { foreignKey: 'district_id' });
Venue.belongsTo(District, { foreignKey: 'district_id' });

Region.hasMany(District, { foreignKey: 'region_id' });
District.belongsTo(Region, { foreignKey: 'region_id' });

Venue.hasMany(Seat, { foreignKey: 'venue_id' });
Seat.belongsTo(Venue, { foreignKey: 'venue_id' });

Seat_Type.hasMany(Seat, { foreignKey: 'seat_type_id' });
Seat.belongsTo(Seat_Type, { foreignKey: 'seat_type_id' });

Sector.hasMany(Seat, { foreignKey: 'sector_id' });
Seat.belongsTo(Sector, { foreignKey: 'sector_id' });


module.exports = {
  Country,
  Region,
  District,
  Admin,
  Customer,
  Event,
  Event_Type,
  Human_Category,
  Gender,
  Lang,
  Venue,
  Venue_Photo,
  Venue_Types,
  Types,
  Sector,
  Seat_Type,
  Seat,
  Ticket,
  Ticket_Status,
  Ticket_Type,
  Booking,
  Payment_Method,
  Delivery_Method,
  Discount,
  Cart,
  Cart_Item,
  Customer_Card,
  Customer_Address,
  Flat,
};