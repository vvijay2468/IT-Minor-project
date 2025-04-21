import { render, screen, fireEvent } from "@testing-library/react";
import AddDeviceForm from "../AddDeviceForm";
import { addDoc } from "firebase/firestore";

// Mock Firebase
jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
}));

describe("AddDeviceForm", () => {
  const mockOnDeviceAdded = jest.fn();

  beforeEach(() => {
    render(<AddDeviceForm onDeviceAdded={mockOnDeviceAdded} />);
  });

  test("renders form fields", () => {
    expect(screen.getByPlaceholderText("Device Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Device Type")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Power Rating (kW)")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Location")).toBeInTheDocument();
  });

  test("submits form with correct data", async () => {
    const deviceData = {
      device_name: "Test Device",
      device_type: "Test Type",
      power_rating: "100",
      location: "Test Location",
    };

    fireEvent.change(screen.getByPlaceholderText("Device Name"), {
      target: { value: deviceData.device_name },
    });
    fireEvent.change(screen.getByPlaceholderText("Device Type"), {
      target: { value: deviceData.device_type },
    });
    fireEvent.change(screen.getByPlaceholderText("Power Rating (kW)"), {
      target: { value: deviceData.power_rating },
    });
    fireEvent.change(screen.getByPlaceholderText("Location"), {
      target: { value: deviceData.location },
    });

    fireEvent.click(screen.getByText("Add Device"));

    expect(addDoc).toHaveBeenCalled();
    expect(mockOnDeviceAdded).toHaveBeenCalled();
  });
});
