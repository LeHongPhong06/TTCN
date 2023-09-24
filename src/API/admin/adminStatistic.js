import instane from '../instane';

export const adminStatistic = {
  getDataPoint: async (id) => {
    const url = `/admin/statistic/student/${id}`;
    try {
      const res = await instane.post(url);
      if (res) return res.data;
      return instane.post(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getDataStatsticClass: async (value) => {
    const url = `/admin/statistic/student`;
    try {
      const res = await instane.post(url, value);
      if (res) return res.data;
      return instane.post(url);
    } catch (error) {
      throw new Error(error);
    }
  },
};
