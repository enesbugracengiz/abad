import { useState, useEffect } from 'react';

const useStatistics = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/admin/statistics');
      
      if (response.ok) {
        const data = await response.json();
        setStatistics(data);
        setError(null);
      } else {
        throw new Error('İstatistikler yüklenemedi');
      }
    } catch (err) {
      console.error('Error loading statistics:', err);
      setError(err.message);
      // Fallback statistics
      setStatistics({
        meta: {
          generatedAt: new Date().toISOString()
        },
        genel: {
          toplamSehir: 75,
          toplamKitap: 7593,
          toplamOyuncak: 1165,
          toplamGiyecek: 1210,
          toplamTemizlik: 211,
          toplamFidan: 4281,
          aktifSehirSayisi: 65
        },
        bolgesel: {}
      });
    } finally {
      setLoading(false);
    }
  };

  const refetchStatistics = () => {
    loadStatistics();
  };

  return {
    statistics,
    loading,
    error,
    refetchStatistics
  };
};

export default useStatistics;