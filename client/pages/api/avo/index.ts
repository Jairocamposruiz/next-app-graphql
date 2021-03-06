import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import enablePublicAccess from '@cors';

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await enablePublicAccess(req, res);

    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    res.status(200).json({
      length,
      data: allEntries,
    });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export default allAvos;
