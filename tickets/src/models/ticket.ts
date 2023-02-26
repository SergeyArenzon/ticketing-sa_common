import mongoose from 'mongoose';

interface TicketAttrs {
    title: string,
    price: number;
    userId: string;
}

interface TicketDoc extends mongoose.Document {
    title: string;
    price: number;
    userId: string;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        equired: true
    },
    userId: {
        type: String,
        equired: true
    }
    },
    {
        toJSON: {
            transform(doc, ret){
                ret.id = doc._id; 
                delete ret._id;
            }
        }
    }
);

ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs);
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);
export {Ticket};