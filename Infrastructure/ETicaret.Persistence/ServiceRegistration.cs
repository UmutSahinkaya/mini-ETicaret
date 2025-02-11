using ETicaret.Application.Abstractions;
using ETicaret.Persistence.Concretes;
using ETicaret.Persistence.Contexts;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace ETicaret.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContext<ETicaretAPIDbContext>(opt =>
            {
                opt.UseNpgsql(configuration.GetConnectionString("PostgreSQL"));
            });
            services.AddSingleton<IProductService, ProductService>();
        }
    }
}
