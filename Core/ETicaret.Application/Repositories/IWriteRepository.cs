using ETicaret.Domain.Entities.Common;

namespace ETicaret.Application.Repositories;

public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
{
    Task<bool> AddAsync(T model);
    Task<bool> AddRangeAsync(List<T> models);
    bool Remove(T model);
    Task<bool> RemoveAsync(string id);
    bool RemoveRange(List<T> models);
    bool Update(T model);

    Task<int> SaveAsync();
}
