import moment from "moment";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { bill } = prisma;

export async function DELETE() {
  await bill.deleteMany();
  return Response.json({ message: "All bills deleted" });
}
export async function GET(request) {
  const url = new URL(request.url);
  const startDate = url.searchParams.get("startDate");
  const endDate = url.searchParams.get("endDate");
  if (!startDate && !endDate) {
    const allBills = await bill.findMany({
      orderBy: { createdAt: "asc" },
    });
    const ResponsedData = allBills.map((bill) => {
      return {
        ID: bill.id,
        Date: moment(bill.createdAt).format("M/DD/YYYY hh:mm:ss A"),
        lane: bill.lane,
        GameMode:
          bill.game +
          "Game" +
          " " +
          bill.bowler +
          "P" +
          " " +
          bill.frame +
          "Frames",
        sum: bill.game * bill.bowler,
        Discount: "100%",
        paymode: bill.payMode,
      };
    });
    return Response.json({
      data: ResponsedData,
      total: allBills.length,
      turnover: allBills.reduce((acc, bill) => {
        return acc + bill.game * bill.bowler;
      }, 0),
    });
  }
  if (!startDate || !endDate) {
    return Response.json(
      { message: "Please provide both startDate and endDate query parameters" },
      { status: 400 }
    );
  }
  const startone = new Date(`${startDate}T00:00:00.000Z`); // Start of the day
  const endone = new Date(`${endDate}T23:59:59.999Z`); // End of the day
  const filteredBills = await bill.findMany({
    where: {
      createdAt: {
        gte: startone,
        lte: endone,
      },
    },
    orderBy: { createdAt: "asc" },
  });
  if (filteredBills.length === 0) {
    return Response.json(
      {
        message: `No bills during ${
          startDate && endDate
            ? `${startDate} / ${endDate}`
            : "the given period"
        }`,
      },
      { status: 404 }
    );
  }

  const ResponsedData = filteredBills.map((bill) => {
    return {
      ID: bill.id,
      Date: moment(bill.createdAt).format("M/DD/YYYY hh:mm:ss A"),
      lane: bill.lane,
      GameMode:
        bill.game +
        "Game" +
        " " +
        bill.bowler +
        "P" +
        " " +
        bill.frame +
        "Frames",
      sum: bill.game * bill.bowler,
      paymode: bill.payMode,
      Discount: "100%",
    };
  });
  return Response.json({
    data: ResponsedData,
    total: filteredBills.length,
    turnover: filteredBills.reduce((acc, bill) => {
      return acc + bill.game * bill.bowler;
    }, 0),
  });
}

export async function POST(request) {
  const res = await request.json();
  if (!res.lane || !res.game || !res.frame || !res.bowler || !res.paymode) {
    return Response.json(
      {
        error: `missing field ${
          !res.lane
            ? "lane"
            : !res.game
            ? "game"
            : !res.frame
            ? "frame"
            : !res.bowler
            ? "bowler"
            : "payMode"
        }`,
      },
      { status: 400 }
    );
  }
  const newBill = await bill.create({
    data: {
      lane: Number(res.lane),
      game: Number(res.game),
      frame: Number(res.frame),
      bowler: Number(res.bowler),
      payMode: res.paymode,
    },
  });
  return Response.json(newBill);
}
