import java.lang.management.ManagementFactory;
import com.sun.management.OperatingSystemMXBean;
import java.util.Date;

public class PowerUsageCalculator {
    public static void main(String[] args) {
        OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(
            OperatingSystemMXBean.class);

        double load = osBean.getSystemCpuLoad() * 100;
        System.out.println("Current CPU load: " + load + "%");

        Date now = new Date();
        long uptime = ManagementFactory.getRuntimeMXBean().getUptime();
        long uptimeInSeconds = uptime / 1000;
        long hours = uptimeInSeconds / 3600;
        long minutes = (uptimeInSeconds % 3600) / 60;
        long seconds = uptimeInSeconds % 60;
        System.out.println("System uptime: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");

        double powerUsage = load * 0.1; // assume 100% load = 10 kW/h
        double costPerHour = 0.25; // $0.25 per kW/h
        double cost = powerUsage * costPerHour;
        System.out.println("Power usage: " + powerUsage + " kW/h");
        System.out.println("Cost per hour: $" + costPerHour);
        System.out.println("Cost: $" + cost + " per hour");
    }
}
